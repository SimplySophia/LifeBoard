import { Card, CardContent } from "../ui/card";

interface DashboardCardProps {
  title: string;
  value: number;
  number?: string;
  badge?: string;
  description?: string;
  bgColor?: string;        
  darkBgColor?: string;    
}

const DashboardCard = ({
  title,
  value,
  number,
  badge,
description = "Last updated 3 mins ago",
  bgColor = "bg-slate-100",         
  darkBgColor = "dark:bg-slate-800",
}: DashboardCardProps) => {
  return (
    <Card className={`p-5 pb-0 flex flex-col justify-between items-start shadow-md rounded-lg ${bgColor} ${darkBgColor}`}>
      <CardContent>
        <h3 className="text-2xl font-semibold text-slate-600 dark:text-white">{title}</h3>
        <h3 className="text-4xl font-bold text-slate-800 dark:text-white">{value}</h3>
        {badge && (
            <span className="text-xs font-medium bg-green-200 dark:bg-green-700 text-green-800 dark:text-white px-2 py-1 rounded-full">
              {badge}
            </span>
          )}
        {number && (
          <h3 className="text-sm font-semibold text-slate-700 dark:text-gray-300">
            {number}
          </h3>
        )}
        <p className="text-sm text-slate-500 dark:text-gray-400">{description}</p>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
