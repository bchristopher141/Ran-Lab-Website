import "./Settings.css";
import SettingsForm from "./SettingsForm";

const Settings = (props) => {
  //Define Handlers
  const onSaveSettingsDataHandler = (enteredSettingsData) => {
    const settingsData = {
      ...enteredSettingsData,
      id: Math.random().toString()
    };
    // console.log("In Settings.js");
    updateSettingHandler(settingsData);
    // console.log(settingsData);
  };
  const updateSettingHandler = (settingsData) => {
    props.onSubmitSetting(settingsData);
  };

  return (
    <div className="settings">
      <SettingsForm onSaveSettingsData={onSaveSettingsDataHandler} />
    </div>
  );
};

export default Settings;
