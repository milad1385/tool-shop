"use client";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import SelectBox from "@/components/ui/SelectBox";
import { createProduct } from "@/libs/actions/product.actions";
import { ICreateNewProduct, ISelectOption } from "@/libs/types";
import {
  createProductSchema,
  TProductSchema,
} from "@/validators/frontend/product.validator";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import toast from "react-hot-toast";
import { FaMinus, FaPlus, FaRegTrashAlt, FaSpinner } from "react-icons/fa";

function CreateNewProduct({ categories, sellers }: ICreateNewProduct) {
  const [images, setImages] = useState<File[]>([]);
  const [selectedCategory, setSelectedCategory] =
    useState<ISelectOption | null>(null);

  const [featureCount, setFeatureCount] = useState(1);
  const [customFeatureCount, setCustomFeatureCount] = useState(1);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    reset,
    setError,
    control,
  } = useForm<TProductSchema>({
    resolver: yupResolver(createProductSchema) as any,
    defaultValues: {
      name: "",
      slug: "",
      category: "",
      description: "",
      sellers: [{ seller: "", stock: 0, price: 0, discount: 0 }],
    },
  });

  const {
    fields: sellerFields,
    append: appendSeller,
    remove: removeSeller,
  } = useFieldArray({
    control,
    name: "sellers",
  });

  const categoriesOption = categories.map((category) => ({
    label: category.name,
    value: category._id,
  }));

  const sellersOptions = sellers.map((seller) => ({
    label: seller.name,
    value: seller._id,
  }));

  
  console.log(errors);
  
  const createProductHandler = async (data: TProductSchema) => {
    console.log(data);
    
    if (!selectedCategory?.value) {
      return toast.error("یک دسته بندی انتخاب کنید");
    }

    startTransition(async () => {
      try {
        const formData = new FormData();

        formData.append("name", data.name);
        formData.append("slug", data.slug);
        formData.append("category", selectedCategory.value);
        formData.append("description", data.description || "");

        const filteredSellers =
          data.sellers?.filter(
            (seller: any) =>
              seller.seller && (seller.price > 0 || seller.stock > 0),
          ) || [];

        const filteredFeatures =
          data.features?.filter(
            (feature: any) =>
              feature.name?.trim() !== "" || feature.value?.trim() !== "",
          ) || [];

        const filteredCustomFeatures =
          data.customFeatures?.filter(
            (feature: any) =>
              feature.name?.trim() !== "" || feature.value?.trim() !== "",
          ) || [];

        formData.append("sellers", JSON.stringify(filteredSellers));
        formData.append("features", JSON.stringify(filteredFeatures));
        formData.append(
          "customFeatures",
          JSON.stringify(filteredCustomFeatures),
        );

        if (images && images.length > 0) {
          for (const image of images) {
            formData.append("imageFiles", image);
          }
        }

        const result = await createProduct(formData);

        if (result.success) {
          toast.success(result.message);
          reset();
          setImages([]);
          setFeatureCount(1);
          setCustomFeatureCount(1);
          router.push("/p-admin/products");
        } else if (result.errors) {
          Object.entries(result.errors).forEach(([field, message]) => {
            setError(field as any, {
              type: "server",
              message,
            });
          });
          console.log(result.errors);
          
          toast.error("اطلاعات وارد شده معتبر نیست");
        } else if (!result.success && result.message) {
          toast.error(result.message);
        }
      } catch (error) {
        console.error("خطا:", error);
        toast.error("خطا در ارتباط با سرور");
      }
    });
  };

  const deleteImage = (indexToDelete: number) => {
    const newImages = images.filter((_, index) => index !== indexToDelete);
    setImages(newImages);
  };

  const addFeature = () => {
    if (featureCount >= 10) return false;
    setFeatureCount((prev) => prev + 1);
  };

  const removeFeature = () => {
    if (featureCount > 1) {
      setFeatureCount((prev) => prev - 1);
    }
  };

  const addCustomFeature = () => {
    if (customFeatureCount >= 10) return false;
    setCustomFeatureCount((prev) => prev + 1);
  };

  const removeCustomFeature = () => {
    if (customFeatureCount > 1) {
      setCustomFeatureCount((prev) => prev - 1);
    }
  };

  const handleAddSeller = () => {
    appendSeller({ seller: "", stock: 0, price: 0, discount: 0 } as any);
  };

  return (
    <form
      onSubmit={handleSubmit(createProductHandler)}
      className="md:section-box"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        <Input
          register={register}
          errors={errors}
          name="name"
          type="text"
          label="نام"
          className="bg-gray-50"
          disable={isPending}
          labelClassName="md:!text-lg font-Iran"
        />
        <Input
          register={register}
          errors={errors}
          name="slug"
          type="text"
          label="لینک"
          className="bg-gray-50"
          disable={isPending}
          labelClassName="md:!text-lg font-Iran"
        />

        <SelectBox
          control={control}
          register={register}
          errors={errors}
          placeholder="دسته بندی را انتخاب کنید"
          name="category"
          options={categoriesOption}
          title="دسته بندی"
          searchable
          selected={selectedCategory}
          onSelected={setSelectedCategory}
          disable={isPending}
        />

        <div className="col-span-1">
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="text-sm md:text-lg text-zinc-800">
                فروشندگان :
              </label>
              <span className="text-sm text-gray-500">
                {sellerFields.length} از ۱۰
              </span>
            </div>

            {sellerFields.map((field, index) => (
              <div
                key={field.id}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 pt-4 pb-6 mb-4 border rounded-lg bg-gray-50 relative"
              >
                <SelectBox
                  control={control}
                  register={register}
                  errors={errors}
                  placeholder="فروشنده را انتخاب کنید"
                  name={`sellers.${index}.seller`}
                  options={sellersOptions}
                  title="فروشنده"
                  searchable
                  disable={isPending}
                  labelClassName="!text-sm"
                />

                <Input
                  register={register}
                  errors={errors}
                  name={`sellers.${index}.stock`}
                  type="number"
                  label="موجودی"
                  placeholder="مثال: 10"
                  className="bg-white"
                  disable={isPending}
                  labelClassName="!text-sm"
                />

                <Input
                  register={register}
                  errors={errors}
                  name={`sellers.${index}.price`}
                  type="number"
                  label="قیمت"
                  placeholder="مثال: 10000"
                  className="bg-white"
                  disable={isPending}
                  labelClassName="!text-sm"
                />

                <Input
                  register={register}
                  errors={errors}
                  name={`sellers.${index}.discount`}
                  type="number"
                  label="تخفیف"
                  placeholder="مثال: 10%"
                  className="bg-white"
                  disable={isPending}
                  labelClassName="!text-sm"
                />

                {sellerFields.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeSeller(index)}
                    className="absolute -top-3 -left-3 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors shadow-md"
                    title="حذف فروشنده"
                  >
                    <FaMinus size={12} />
                  </button>
                )}
              </div>
            ))}

            <Button
              type="button"
              onClick={handleAddSeller}
              disabled={sellerFields.length >= 10}
              className={`!w-full md:!w-[200px] !text-white flex items-center justify-center gap-2 ${
                sellerFields.length >= 10
                  ? "!bg-gray-400 cursor-not-allowed"
                  : "!bg-sky-500 hover:!bg-sky-600"
              }`}
            >
              <FaPlus /> افزودن فروشنده جدید
            </Button>
          </div>
        </div>
        <div className="col-span-1">
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="text-sm md:text-lg text-zinc-800">
                ویژگی فیلتری :
              </label>
              <span className="text-sm text-gray-500">
                {featureCount} از ۱۰
              </span>
            </div>

            {Array.from({ length: featureCount }).map((_, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 pt-4 pb-6 mb-4 border rounded-lg bg-gray-50 relative"
              >
                <Input
                  register={register}
                  errors={errors}
                  name={`features.${index}.name`}
                  type="text"
                  label="نام ویژگی"
                  placeholder="مثال: حافظه"
                  className="bg-white"
                  disable={isPending}
                  labelClassName="!text-sm"
                />

                <Input
                  register={register}
                  errors={errors}
                  name={`features.${index}.value`}
                  type="text"
                  label="مقدار"
                  placeholder="مثال: 256"
                  className="bg-white"
                  disable={isPending}
                  labelClassName="!text-sm"
                />
                <Input
                  register={register}
                  errors={errors}
                  name={`features.${index}.slug`}
                  type="text"
                  label="اسلاگ"
                  placeholder="مثال: type"
                  className="bg-white"
                  disable={isPending}
                  labelClassName="!text-sm"
                />

                {featureCount > 1 && (
                  <button
                    type="button"
                    onClick={removeFeature}
                    className="absolute -top-3 -left-3 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors shadow-md"
                    title="حذف این ویژگی"
                  >
                    <FaMinus size={12} />
                  </button>
                )}
              </div>
            ))}

            <Button
              type="button"
              onClick={addFeature}
              disabled={featureCount >= 10}
              className={`!w-full md:!w-[200px] !text-white flex items-center justify-center gap-2 ${
                featureCount >= 10
                  ? "!bg-gray-400 cursor-not-allowed"
                  : "!bg-sky-500 hover:!bg-sky-600"
              }`}
            >
              <FaPlus /> افزودن ویژگی جدید
            </Button>
          </div>
        </div>

        <div className="col-span-1">
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="text-sm md:text-lg text-zinc-800">
                ویژگی سفارشی :
              </label>
              <span className="text-sm text-gray-500">
                {customFeatureCount} از ۱۰
              </span>
            </div>

            {Array.from({ length: customFeatureCount }).map((_, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 pt-4 pb-6 mb-4 border rounded-lg bg-gray-50 relative"
              >
                <Input
                  register={register}
                  errors={errors}
                  name={`customFeatures.${index}.name`}
                  type="text"
                  label="نام ویژگی"
                  placeholder="مثال: برند"
                  className="bg-white"
                  disable={isPending}
                  labelClassName="!text-sm"
                />

                <Input
                  register={register}
                  errors={errors}
                  name={`customFeatures.${index}.value`}
                  type="text"
                  label="مقدار"
                  placeholder="مثال: سامسونگ"
                  className="bg-white"
                  disable={isPending}
                  labelClassName="!text-sm"
                />

                 <Input
                  register={register}
                  errors={errors}
                  name={`customFeatures.${index}.slug`}
                  type="text"
                  label="اسلاگ"
                  placeholder="مثال: type"
                  className="bg-white"
                  disable={isPending}
                  labelClassName="!text-sm"
                />

                {customFeatureCount > 1 && (
                  <button
                    type="button"
                    onClick={removeCustomFeature}
                    className="absolute -top-3 -left-3 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors shadow-md"
                    title="حذف این ویژگی"
                  >
                    <FaMinus size={12} />
                  </button>
                )}
              </div>
            ))}

            <Button
              type="button"
              onClick={addCustomFeature}
              disabled={customFeatureCount >= 10}
              className={`!w-full md:!w-[200px] !text-white flex items-center justify-center gap-2 ${
                customFeatureCount >= 10
                  ? "!bg-gray-400 cursor-not-allowed"
                  : "!bg-red-500 hover:!bg-red-600"
              }`}
            >
              <FaPlus /> افزودن ویژگی سفارشی
            </Button>
          </div>
        </div>

        <div className="col-span-1 md:col-span-2">
          <Input
            register={register}
            errors={errors}
            name="description"
            type="textarea"
            label="توضیحات"
            className="bg-gray-50"
            disable={isPending}
            labelClassName="md:!text-lg font-Iran"
          />
        </div>
        <Input
          register={register}
          errors={errors}
          name="images"
          type="file"
          label="تصاویر"
          disable={isPending}
          labelClassName="md:!text-lg font-Iran"
          setImage={setImages}
          multiple
          setValue={setValue}
        />

        {images && images.length > 0 && (
          <div className="flex items-end justify-end gap-x-2 flex-wrap">
            {images.map((image, index) => (
              <div className="relative" key={index}>
                <Image
                  src={URL.createObjectURL(image)}
                  width={100}
                  height={100}
                  className="w-[100px] h-[100px] object-cover rounded-md"
                  alt="image"
                />
                <FaRegTrashAlt
                  onClick={() => deleteImage(index)}
                  className="text-red-500 absolute -top-8 right-0 text-xl md:cursor-pointer hover:text-red-700 transition-colors"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="gap-x-4 grid md:flex grid-cols-2 pb-5">
        <Button
          type="submit"
          className="md:!w-[200px] mt-10 flex items-center justify-center h-[48px]"
          disabled={isPending}
        >
          {isPending ? (
            <FaSpinner className="animate-spin text-xl" />
          ) : (
            "ایجاد محصول"
          )}
        </Button>
        <Button
          onClick={() => {
            reset();
            setImages([]);
            setFeatureCount(1);
            setCustomFeatureCount(1);
          }}
          type="reset"
          className="md:!w-[200px] mt-10 !bg-red-500"
          disabled={isPending}
        >
          لغو
        </Button>
      </div>
    </form>
  );
}

export default CreateNewProduct;
