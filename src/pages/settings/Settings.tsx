import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import AppHeader from "../../components/layout/AppHeader";
import TextInput from "../../components/TextInput";
import {
  useSetSettingsMutation,
  useSettingsQuery,
} from "../../feature/settings/settingsApi";

function convertToTitleCase(text: string) {
  let result = text.replace(/([A-Z])/g, " $1");
  result = result.charAt(0).toUpperCase() + result.slice(1);
  return result;
}

const Settings = () => {
  const { isLoading, data } = useSettingsQuery(null);
  const [setSetting, { isLoading: setSettingLoading }] =
    useSetSettingsMutation();
  const [settings, setSettings] = useState<any>({});
  const [errors, setErrors] = useState<any>({});

  useEffect(() => {
    if (data?.settings) {
      setSettings(data?.settings);
    }
  }, [data, isLoading]);

  const handleInputChange = (key: string, value: string) => {
    setSettings((prevSettings: any) => ({
      ...prevSettings,
      [key]: value,
    }));
  };

  const handleSubmit = async () => {
    const res: any = await setSetting(settings);
    if (res?.data?.success) {
      setErrors({});
      toast.success(res?.data?.message);
    } else {
      if (res?.data?.errors) {
        setErrors(res?.data?.errors);
      }
      toast.error(res?.data?.message);
    }
  };

  return (
    <div className="flex flex-col gap-1 px-4">
      <AppHeader title="Settings" />
      <div className="flex flex-wrap gap-4">
        {Object.keys(settings)?.map((key, index) => (
          <div key={index} className="basis-[320px] grow">
            <TextInput
              label={convertToTitleCase(key)}
              onChange={(e) => handleInputChange(key, e.target.value)}
              value={settings[key]}
              error={errors[key] ? true : false}
              helperText={errors[key]}
              type="number"
              placeholder={key}
              containerClasses="mb-4"
            />
          </div>
        ))}
      </div>

      <button
        onClick={handleSubmit}
        disabled={setSettingLoading}
        className={`btn btn-primary w-[200px] ${
          setSettingLoading ? "loading" : ""
        }`}
      >
        Save Changes
      </button>
      <br />
    </div>
  );
};

export default Settings;
