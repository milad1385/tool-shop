import DeliverySlotClient from "./DeliverySlotClient";
import Title from "./Title";

function ChooseTime({ slots }) {
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
      <DeliverySlotClient slotsByDay={JSON.parse(JSON.stringify(slotsByDay))} />
    </div>
  );
}

export default ChooseTime;
