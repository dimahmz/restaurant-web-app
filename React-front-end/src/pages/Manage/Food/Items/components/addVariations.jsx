import MultipleSelectChip from "../../../components/MultipleSelect";

export default function addVariation() {
  return (
    <div className="flex-column space-y-3 mb-3">
      <label className="inline-block">Add Variations</label>
      <div className="w-full">
        <MultipleSelectChip
        // options={foodVariations}
        // onSelectOption={onSelectVariation}
        />
      </div>

      <section className="bg-[#ebeef6] px-3 py-4">
        <h1 className="text-center py-2 bg-[#F64E60] text-white">
          Please enter price for each variation
        </h1>
        <div className="pt-4">
          {/* <VariationPrice
            variations={selectedVariations}
            onSelectOption={onAddVariationPrice}
          /> */}
        </div>
      </section>
    </div>
  );
}
