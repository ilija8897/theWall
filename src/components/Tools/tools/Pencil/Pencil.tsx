import React from "react";
import { Button } from "components/Button";

import style from './Pencil.modules.scss';

type Props = {
    label?: string;
}
// TODO по суди компоненты инструментов сейчас одинаковые. Можно унифицировать
export const Pencil = ({ label }: Props) => {
    return (
        <Button style={style.root} label='pencil' />
    );
}