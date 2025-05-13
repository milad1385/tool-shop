import React from "react";
import TicketItem from "./TicketItem";

function TicketList() {
  return (
    <div className="space-y-4">
      <TicketItem />
      <TicketItem />
      <TicketItem />
      <TicketItem />
    </div>
  );
}

export default TicketList;
