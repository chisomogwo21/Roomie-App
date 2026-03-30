import SelectLocation from "@/imports/SelectLocation";

interface SelectLocationScreenProps {
  onSkip: () => void;
  onUseCurrentLocation: () => void;
  onSelectManually: () => void;
}

export function SelectLocationScreen({
  onSkip,
  onUseCurrentLocation,
  onSelectManually,
}: SelectLocationScreenProps) {
  return (
    <div className="size-full relative">
      <div className="pointer-events-none [&_[data-name='IOS_iPhone_/_Status_Bar_—_with_phone_notch']]:hidden [&_[data-name='IOS_iPhone_/_Home_Indicator']]:hidden">
        <SelectLocation />
      </div>

      {/* Interactive overlays */}
      {/* Skip button */}
      <button
        onClick={onSkip}
        className="absolute right-[24px] top-[60px] w-[65px] h-[32px] z-50 rounded-[24px]"
        aria-label="Skip"
      />

      {/* Use current location button */}
      <button
        onClick={onUseCurrentLocation}
        className="absolute left-[24px] top-[610px] w-[327px] h-[52px] z-50 rounded-[8px]"
        aria-label="Use current location"
      />

      {/* Select manually button */}
      <button
        onClick={onSelectManually}
        className="absolute left-[24px] top-[678px] w-[327px] h-[52px] z-50 rounded-[8px]"
        aria-label="Select it manually"
      />
    </div>
  );
}