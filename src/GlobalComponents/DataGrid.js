import React, { useState } from "react";
import "../styles/Grid.css";
import {
  Grid,
  Table,
  TableHeaderRow,
  TableEditRow,
  TableEditColumn,
  PagingPanel,
  Toolbar,
  SearchPanel,
} from "@devexpress/dx-react-grid-bootstrap4";

import {
  PagingState,
  IntegratedPaging,
  SortingState,
  IntegratedSorting,
  EditingState,
  SearchState,
  IntegratedFiltering,
} from "@devexpress/dx-react-grid";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

export default function LoanGrid() {
  const [columns] = useState([
    { name: "ecarId", title: "ECar ID" },
    { name: "account", title: "Account #" },
    { name: "company", title: "Company" },
    { name: "dateOfLoan", title: "Date of Loan" },
    { name: "name", title: "Name" },
    { name: "cardHolder", title: "Card Holder" },
    { name: "address", title: "Address" },
    { name: "queue", title: "Queue" },
    { name: "prodDesc", title: "Prod Desc" },
    { name: "caseNo", title: "Case #" },
    { name: "vin", title: "VIN #" },
    { name: "afsDate", title: "AFS Obligator Post Date" },
    { name: "internalCode", title: "Internal Status Code" },
    { name: "externalCode", title: "External Status Code" },
    { name: "collateralId", title: "Collateral ID" },
    { name: "propertyAddress", title: "Property Address" },
  ]);

  const [rows, setRows] = useState([
    {
      ecarId: "1001",
      account: "ACC123",
      company: "Consumer",
      dateOfLoan: "2025-09-23",
      name: "John Doe",
      cardHolder: "John Doe",
      address: "123 Main St",
      queue: "Q1",
      prodDesc: "Auto Loan",
      caseNo: "C001",
      vin: "VIN001",
      afsDate: "2025-09-20",
      internalCode: "I-01",
      externalCode: "E-01",
      collateralId: "COL001",
      propertyAddress: "456 Elm St",
    },
    {
      ecarId: "1002",
      account: "ACC123",
      company: "Consumer",
      dateOfLoan: "2025-09-23",
      name: "John Doe",
      cardHolder: "John Doe",
      address: "123 Main St",
      queue: "Q1",
      prodDesc: "Auto Loan",
      caseNo: "C001",
      vin: "VIN001",
      afsDate: "2025-09-20",
      internalCode: "I-01",
      externalCode: "E-01",
      collateralId: "COL001",
      propertyAddress: "456 Elm St",
    },
  ]);

  const commitChanges = ({ added, changed, deleted }) => {
    let updatedRows = rows;
    if (added) {
      const startingAddedId =
        rows.length > 0 ? parseInt(rows[rows.length - 1].ecarId) + 1 : 1000;
      updatedRows = [
        ...updatedRows,
        ...added.map((row, index) => ({
          ecarId: startingAddedId + index,
          ...row,
        })),
      ];
    }
    if (changed) {
      updatedRows = updatedRows.map((row) =>
        changed[row.ecarId] ? { ...row, ...changed[row.ecarId] } : row
      );
    }
    if (deleted) {
      updatedRows = updatedRows.filter(
        (row) => !deleted.includes(row.ecarId)
      );
    }
    setRows(updatedRows);
  };

  return (
    <div className="card">
    <span className="grid-header">{"Results"}</span>
      <Grid rows={rows} columns={columns}>
        {/* Sorting */}
        <SortingState />
        <IntegratedSorting />

        {/* Paging */}
        <PagingState defaultCurrentPage={0} pageSize={5} />
        <IntegratedPaging />

        {/* Editing */}
        <EditingState onCommitChanges={commitChanges} />

        {/* Searching */}
        <SearchState />
        <IntegratedFiltering />

        {/* Table */}
        <Table />
        <TableHeaderRow showSortingControls />
        {/* <TableEditRow /> */}
        {/* <TableEditColumn showAddCommand showEditCommand showDeleteCommand /> */}
        
        {/* Toolbar */}
        {/* <Toolbar className="gridToolBar" /> */}
        {/* <SearchPanel /> */}
        <PagingPanel />
      </Grid>
    </div>
  );
}
