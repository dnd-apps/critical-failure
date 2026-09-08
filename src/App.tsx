import { useMemo, useState } from "react";
import { Dices } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { FumbleCard } from "@/components/FumbleCard";
import { TableTabs } from "@/components/TableTabs";
import { EntriesTable } from "@/components/EntriesTable";
import { findEntryForRoll, tables } from "@/data/tables";
import { parseDice, roll as rollDice } from "@/lib/dice";
import githubMark from "@/assets/GitHub-Mark-64px.png";

export default function App() {
  const [selectedTableId, setSelectedTableId] = useState(tables[0].id);
  const [currentRoll, setCurrentRoll] = useState(0);

  const selectedTable = useMemo(
    () => tables.find(({ id }) => id === selectedTableId) ?? tables[0],
    [selectedTableId],
  );

  const selectedEntry = findEntryForRoll(selectedTable.entries, currentRoll);

  function rollTheDice() {
    setCurrentRoll(rollDice(parseDice(selectedTable.dieSize)));
  }

  return (
    <div className="mx-auto flex min-h-svh w-full max-w-4xl flex-col gap-6 p-4 pb-24">
      <header className="flex flex-wrap items-baseline justify-between gap-2">
        <h1 className="text-xl font-semibold tracking-tight">
          Critical Failure
        </h1>
        <p className="text-muted-foreground text-sm">
          Fumble tables for your worst rolls.
        </p>
      </header>

      <TableTabs
        tables={tables}
        selectedTableId={selectedTableId}
        onSelect={(id) => {
          setSelectedTableId(id);
          setCurrentRoll(0);
        }}
      />

      <FumbleCard entry={selectedEntry} />

      <div className="flex items-center justify-between gap-4">
        <Button onClick={rollTheDice} size="lg">
          <Dices />
          Roll {selectedTable.dieSize}
        </Button>
        <Badge variant="outline" className="text-sm">
          Current Roll: {currentRoll || "—"}
        </Badge>
      </div>

      <EntriesTable
        key={selectedTable.id}
        title={`${selectedTable.name} Fumble Chart`}
        entries={selectedTable.entries}
        highlighted={selectedEntry}
      />

      <footer className="bg-background fixed inset-x-0 bottom-0 z-50">
        <Separator />
        <div className="mx-auto flex max-w-4xl items-center gap-2 p-2 text-sm">
          <img src={githubMark} alt="" className="size-4 dark:invert" />
          <a
            className="hover:text-primary underline underline-offset-4"
            href="https://github.com/mbround18/critical-failure"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check this project out on GitHub!
          </a>
        </div>
      </footer>
    </div>
  );
}
