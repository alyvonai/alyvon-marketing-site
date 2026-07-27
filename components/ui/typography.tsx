// Typography primitives for list, table, blockquote, and code treatments --
// Ticket 0c Section 6. All six exports (List, OrderedList, DataTable, Blockquote,
// InlineCode, CodeBlock) use existing tokens only; no new hex values or one-off
// font sizes are introduced here.
//
// Correction note (see docs/ticket-0c-corrections-applied.md item 2): Section 6's
// blockquote rule itself is UNCHANGED from the approved version (Display M weight,
// no italic, size/color carry the emphasis). Its old rationale named Fraunces
// specifically; Fraunces is retired, so the comment below references Archivo
// instead. This is a documentation correction only, not a design change.
//
// DataTable is a compound component (DataTable.Head / .Body / .Row / .HeaderCell /
// .Cell) rather than six separate exports, so the table always ships with the
// overflow-x-auto wrapper required to stay usable at the 360px floor -- a bare
// <table> export would make that easy to forget per call site.
import * as React from "react"
import { cn } from "@/lib/utils"

// ---------------------------------------------------------------------------
// List / OrderedList
// ---------------------------------------------------------------------------

export type ListProps = React.HTMLAttributes<HTMLUListElement>

const List = React.forwardRef<HTMLUListElement, ListProps>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn(
      "list-disc space-y-1.5 pl-5 text-body text-text-primary marker:text-text-secondary",
      className
    )}
    {...props}
  />
))
List.displayName = "List"

export type OrderedListProps = React.HTMLAttributes<HTMLOListElement>

const OrderedList = React.forwardRef<HTMLOListElement, OrderedListProps>(
  ({ className, ...props }, ref) => (
    <ol
      ref={ref}
      className={cn(
        "list-decimal space-y-1.5 pl-5 text-body text-text-primary marker:text-text-secondary",
        className
      )}
      {...props}
    />
  )
)
OrderedList.displayName = "OrderedList"

// ---------------------------------------------------------------------------
// DataTable (compound component)
// ---------------------------------------------------------------------------

export type DataTableProps = React.TableHTMLAttributes<HTMLTableElement>

const DataTableRoot = React.forwardRef<HTMLTableElement, DataTableProps>(
  ({ className, ...props }, ref) => (
    // overflow-x-auto keeps wide tables usable down to the 360px breakpoint floor
    // instead of forcing the whole page to scroll horizontally.
    <div className="w-full overflow-x-auto rounded-card border border-border-subtle">
      <table ref={ref} className={cn("w-full border-collapse text-body-s", className)} {...props} />
    </div>
  )
)
DataTableRoot.displayName = "DataTable"

const DataTableHead = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, ref) => (
    <thead ref={ref} className={cn("bg-surface text-left", className)} {...props} />
  )
)
DataTableHead.displayName = "DataTable.Head"

const DataTableBody = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, ref) => <tbody ref={ref} className={className} {...props} />
)
DataTableBody.displayName = "DataTable.Body"

const DataTableRow = React.forwardRef<HTMLTableRowElement, React.HTMLAttributes<HTMLTableRowElement>>(
  ({ className, ...props }, ref) => (
    <tr ref={ref} className={cn("border-b border-border-subtle last:border-0", className)} {...props} />
  )
)
DataTableRow.displayName = "DataTable.Row"

const DataTableHeaderCell = React.forwardRef<HTMLTableCellElement, React.ThHTMLAttributes<HTMLTableCellElement>>(
  ({ className, ...props }, ref) => (
    <th
      ref={ref}
      className={cn("px-4 py-3 font-mono text-label uppercase text-text-secondary", className)}
      {...props}
    />
  )
)
DataTableHeaderCell.displayName = "DataTable.HeaderCell"

// Metadata-style cells (e.g. a timestamp column) may opt into text-tertiary via
// className, but only at >=14px-bold contexts per the usage restriction -- default
// cell copy uses text-secondary to stay safely within contrast at text-body-s (14px
// normal weight).
const DataTableCell = React.forwardRef<HTMLTableCellElement, React.TdHTMLAttributes<HTMLTableCellElement>>(
  ({ className, ...props }, ref) => (
    <td ref={ref} className={cn("px-4 py-3 text-text-secondary", className)} {...props} />
  )
)
DataTableCell.displayName = "DataTable.Cell"

const DataTable = Object.assign(DataTableRoot, {
  Head: DataTableHead,
  Body: DataTableBody,
  Row: DataTableRow,
  HeaderCell: DataTableHeaderCell,
  Cell: DataTableCell,
})

// ---------------------------------------------------------------------------
// Blockquote
// ---------------------------------------------------------------------------

export interface BlockquoteProps extends React.BlockquoteHTMLAttributes<HTMLQuoteElement> {
  /** Optional attribution, rendered below the quote at text-body-s / text-secondary. */
  cite?: string
}

const Blockquote = React.forwardRef<HTMLQuoteElement, BlockquoteProps>(
  ({ className, cite, children, ...props }, ref) => (
    <blockquote
      ref={ref}
      className={cn(
        // Display M, no italic -- Archivo at Display M weight already carries enough
        // presence without italic (corrected rationale, was previously attributed to
        // Fraunces; see docs/ticket-0c-corrections-applied.md item 2).
        "border-l-4 border-border-subtle pl-6 text-display-m not-italic text-text-primary",
        className
      )}
      {...props}
    >
      {children}
      {cite ? <footer className="mt-2 text-body-s font-normal text-text-secondary">{cite}</footer> : null}
    </blockquote>
  )
)
Blockquote.displayName = "Blockquote"

// ---------------------------------------------------------------------------
// InlineCode / CodeBlock
// ---------------------------------------------------------------------------

export type InlineCodeProps = React.HTMLAttributes<HTMLElement>

const InlineCode = React.forwardRef<HTMLElement, InlineCodeProps>(({ className, ...props }, ref) => (
  <code
    ref={ref}
    className={cn(
      "rounded-[4px] bg-surface-sunken px-1.5 py-0.5 font-mono text-mono text-text-primary",
      className
    )}
    {...props}
  />
))
InlineCode.displayName = "InlineCode"

export interface CodeBlockProps extends React.HTMLAttributes<HTMLPreElement> {
  /** Optional filename/label shown in a thin header bar above the code. */
  filename?: string
}

const CodeBlock = React.forwardRef<HTMLPreElement, CodeBlockProps>(
  ({ className, filename, children, ...props }, ref) => (
    <div className="overflow-hidden rounded-card border border-border-subtle">
      {filename ? (
        <div className="border-b border-border-subtle bg-surface px-4 py-2 font-mono text-label uppercase text-text-secondary">
          {filename}
        </div>
      ) : null}
      <pre
        ref={ref}
        className={cn(
          "overflow-x-auto bg-surface-sunken p-4 font-mono text-mono text-text-primary",
          className
        )}
        {...props}
      >
        {children}
      </pre>
    </div>
  )
)
CodeBlock.displayName = "CodeBlock"

export { List, OrderedList, DataTable, Blockquote, InlineCode, CodeBlock }
