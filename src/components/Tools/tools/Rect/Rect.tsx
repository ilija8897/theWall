import React from "react";
import { Button } from "components/Button";

import style from './Rect.modules.scss';

type Props = {
    label?: string;
}

export const Rect = ({ label }: Props) => {
    return (
        <Button style={style.root} label='rect' />
    );
}