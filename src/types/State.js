// @flow
/* eslint-disable */
import type { Reducers } from '../redux/reducers';

type $ExtractFunctionReturn = <V>(v: (...args: any) => V) => V;

export type State = $ObjMap<Reducers, $ExtractFunctionReturn>;
/* eslint-enable */
