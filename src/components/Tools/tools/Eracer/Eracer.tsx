import React from "react";
import { Button } from "components/Button";

import style from './Eracer.modules.scss';

type Props = {
    label?: string;
}

export const Eracer = ({ label }: Props) => {
    return (
        <Button style={style.root} label='eracer' />
    );
}