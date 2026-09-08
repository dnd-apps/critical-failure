import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { RollTableEntry } from "@/data/tables";

interface FumbleCardProps {
  entry: RollTableEntry | undefined;
}

export function FumbleCard({ entry }: FumbleCardProps) {
  if (!entry) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>No fumble yet</CardTitle>
          <CardDescription>
            Roll to find out how badly this goes.
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card className="border-primary/40 bg-primary/10">
      <CardHeader>
        <CardTitle className="text-2xl">{entry.title}</CardTitle>
        <CardDescription className="flex gap-2 pt-1">
          <Badge variant="secondary">Low {entry.low}</Badge>
          <Badge variant="secondary">High {entry.high}</Badge>
        </CardDescription>
      </CardHeader>
      <CardContent>{entry.effect}</CardContent>
    </Card>
  );
}
