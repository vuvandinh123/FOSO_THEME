import { ChevronRight } from "lucide-react";
import React, { Fragment } from "react";

type Props = {
  data: Array<{ name: string; url: string }>;
};
export default function Breadcrumb({ data }: Props) {
  return (
    <div className="flex justify-center items-center">
      <ul className="flex items-center space-x-2 text-sm">
        {data?.map((item, index) => {
          return (
            <Fragment key={index}>
              <li key={index}>
                <a href={item.url}>{item.name}</a>
              </li>
              {index < data.length - 1 && (
                <li>
                  <ChevronRight size={15} />
                </li>
              )}
            </Fragment>
          );
        })}
      </ul>
    </div>
  );
}
