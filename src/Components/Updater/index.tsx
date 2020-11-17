import React, { useCallback, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { AdapterBalance } from "../../Adapter/IAdapter";
import { Adapter } from "../../Store/Adapter";
import { Balances } from "../../Store/Balance";
import { Emitter, EmitterAction } from "../../Utils/EventEmitter";

export const Updater = () => {
  const adapter = useRecoilValue(Adapter);
  const [, setBalances] = useRecoilState(Balances);

  const updateStateBalances = useCallback(
    (balances: AdapterBalance[]) => {
      balances.forEach((b) => {
        setBalances((state) => ({ ...state, [b.name]: b.balance }));
      });
    },
    [setBalances]
  );

  const fetchBalances = () => {
    if (!adapter) return;
    adapter.getBalances().then(() => {
      setTimeout(() => {
        fetchBalances();
      }, 5000);
    });
  };

  useEffect(() => {
    fetchBalances();
    Emitter.on(EmitterAction.BALANCE, updateStateBalances as any);
  }, [adapter, updateStateBalances]);

  return <></>;
};
