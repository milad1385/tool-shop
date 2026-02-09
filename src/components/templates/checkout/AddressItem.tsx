import { FaPencilAlt } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";

function AddressItem() {
  return (
    <div className="border border-sky-600 rounded-lg flex justify-between p-4">
      <div className="flex gap-x-4">
        <LuMapPin className="text-xl text-sky-600" />
        <div className="space-y-2">
          <h3 className="text-sky-600">
            {" "}
            استان البرز ، کرج ، ساختمان شماره 135
          </h3>
          <h4 className="text-[15px] text-zinc-700">کد پستی : 3148889524</h4>
          <h5 className="text-[15px] text-zinc-700">گیرنده : میلاد سلامیان | 09336085012</h5>
        </div>
      </div>
      <FaPencilAlt className="text-xl text-zinc-500" />
    </div>
  );
}

export default AddressItem;
