import DeliverySlotClient from "./DeliverySlotClient";
import Title from "./Title";

function ChooseTime({ slots, selectedSlot, onSelect }) {
  const slotsByDay = slots.reduce((acc: any, slot: any) => {
    if (!acc[slot.dayOfWeek]) {
      acc[slot.dayOfWeek] = [];
    }
    acc[slot.dayOfWeek].push(slot);
    return acc;
  }, {});

  return (
    <div className="mt-5">
      <Title title="انتخاب زمان ارسال" />
      <DeliverySlotClient
        slotsByDay={slotsByDay}
        selectedSlot={selectedSlot}
        onSelect={onSelect}
      />
    </div>
  );
}

export default ChooseTime;
