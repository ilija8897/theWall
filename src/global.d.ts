// declare module '*.module.scss' {
//     const style: Record<string, string>;
//     export default style;
// }
declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.sass' {
  const classes: { [key: string]: string };
  export default classes;
}
declare module '*.module.css';
declare module '*.module.scss';
declare module '*.svg';
