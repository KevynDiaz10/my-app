import { LucideIcon } from "lucide-react";

export type CustomIconProps = {
  icon: LucideIcon;
};
 
export default function CustomIcon(props: CustomIconProps) {
  const { icon: Icon } = props;
  return (
    //cuando se llama al componente <CustomIcon icon={Facebook}/> sele tiene que pasar un atributo icon
    <div className="p-2 bg-slate-400/20 rounded-lg">
        <Icon strokeWidth={1} className="h-4 w-4"/>
    </div>
  );
}
