import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { ClassNameValue } from "tailwind-merge";

export const ReferenceTable = ({ title, description, children, required, className }: { title: string, description: string, children: ReactNode, className?: ClassNameValue, required?: boolean }) => {
    return (
        <div className={cn("border rounded-lg shadow-sm overflow-auto", className)}>
            <div className="px-6 py-4">
                <div className="flex gap-x-2">
                    <h3 className="font-mono font-bold">{title}</h3>
                    { required
                        ? <span className="text-red-500 text-sm font-thin ">Required</span>
                        : <span className="text-muted-foreground text-sm font-thin italic">Not required</span>}
                </div>
                <p>{description}</p>
            </div>
            <Separator />
            <table className="w-full px-6">
                {children}
            </table>
        </div>
    )
}

export const ReferanceTableHeader = ({ first, second, third }: { first: string, second: string, third: string }) => {
    return (
        <thead>
            <tr className="bg-muted">
                <th>{first}</th>
                <th>{second}</th>
                <th>{third}</th>
            </tr>
        </thead>
    )
}

interface TableItemProps {
    prop: string;
    values: string[];
    description: string;
    required?: boolean;
}

export const ReferanceTableItem = ({ data }: { data: TableItemProps[] }) => {
    return data.map((prop) => (
            <tr className="border-t *:px-4 *:py-1 text-nowrap ">
                <td className="pl-6"><code>{prop.prop}</code>{prop.required && <span className="text-red-500 ml-1 text-xl leading-3">*</span>}</td>
                <td className="border-x space-x-2">
                    {Array.isArray(prop.values) 
                        ? prop.values.map((value, index) => (
                            <code key={index}>
                                {value}
                            </code>
                          ))
                        : <span>{prop.values}</span>
                    }
                </td>
                <td className="pr-6">{prop.description}</td>
            </tr>
        ))
}