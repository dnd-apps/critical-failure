import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { RollTable } from "@/data/tables";

interface TableTabsProps {
  tables: RollTable[];
  selectedTableId: string;
  onSelect: (id: string) => void;
}

export function TableTabs({
  tables,
  selectedTableId,
  onSelect,
}: TableTabsProps) {
  return (
    <Tabs value={selectedTableId} onValueChange={onSelect}>
      <TabsList className="w-full">
        {tables.map((table) => (
          <TabsTrigger key={table.id} value={table.id}>
            {table.name}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
