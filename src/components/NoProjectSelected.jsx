import NoProjectImage from "../assets/no-projects.png";
import Button from "./Button";

export default function NoProjectSelected(onStartAddProject) {
  return (
    <div className="w-2/3 mt-24 text-center">
      <img
        src={NoProjectImage}
        alt="An empty task list"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No project selected
      </h2>
      <p className="text-gray-700 mb-4">Select a project to continue</p>
      <p>
        <Button onClick={onStartAddProject}>Create a new project</Button>
      </p>
    </div>
  );
}
