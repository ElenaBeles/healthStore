export interface IButtonWithIcon {
    type: "button" | "submit" | "reset";
    src: string;
    text: string;
    onClick?: any;
    className?: string;
    status?: boolean | string | any;
}