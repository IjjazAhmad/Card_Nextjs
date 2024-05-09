export type FeathCardTextProps = {
    text: string;
    textBold: string;
  };
export type CardSecProps = {
    text: string;
    textBold: string;
    wrap: string;
    cardBg: string;
    imageFirst: boolean;
    CardImg: React.FC;
  };
 export type FeatCardObjProps =CardSecProps[]