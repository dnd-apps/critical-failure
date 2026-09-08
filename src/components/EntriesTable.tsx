import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import type { RollTableEntry } from "@/data/tables";

const ITEMS_PER_PAGE = 5;

interface EntriesTableProps {
  title: string;
  entries: RollTableEntry[];
  highlighted: RollTableEntry | undefined;
}

export function EntriesTable({
  title,
  entries,
  highlighted,
}: EntriesTableProps) {
  const [page, setPage] = useState(0);
  const pageCount = Math.max(1, Math.ceil(entries.length / ITEMS_PER_PAGE));
  const start = page * ITEMS_PER_PAGE;
  const visible = entries.slice(start, start + ITEMS_PER_PAGE);

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Effect</TableHead>
              <TableHead className="w-16">Low</TableHead>
              <TableHead className="w-16">High</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {visible.map((entry) => (
              <TableRow
                key={`${entry.low}-${entry.high}-${entry.title}`}
                className={cn(entry === highlighted && "bg-primary/20")}
              >
                <TableCell className="font-medium">{entry.title}</TableCell>
                <TableCell className="whitespace-normal">
                  {entry.effect}
                </TableCell>
                <TableCell>{entry.low}</TableCell>
                <TableCell>{entry.high}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <Pagination className="pt-4">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                aria-disabled={page === 0}
                className={cn(page === 0 && "pointer-events-none opacity-50")}
                onClick={(event) => {
                  event.preventDefault();
                  setPage((current) => Math.max(0, current - 1));
                }}
              />
            </PaginationItem>
            {Array.from({ length: pageCount }, (_, index) => (
              <PaginationItem key={index}>
                <PaginationLink
                  href="#"
                  isActive={index === page}
                  onClick={(event) => {
                    event.preventDefault();
                    setPage(index);
                  }}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                href="#"
                aria-disabled={page >= pageCount - 1}
                className={cn(
                  page >= pageCount - 1 && "pointer-events-none opacity-50",
                )}
                onClick={(event) => {
                  event.preventDefault();
                  setPage((current) => Math.min(pageCount - 1, current + 1));
                }}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </CardContent>
    </Card>
  );
}
