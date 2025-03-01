import { IEntry } from "../interfaces";

interface EntryCardProps {
  entry: IEntry;
}

export default function EntryCard({ entry }: EntryCardProps) {
  return (
    <div
      key={entry.name}
      className="inline-flex flex-row space-x-4 w-full h-40 p-1 rounded-lg bg-gray-700 text-white"
    >
      <img src={entry.imageURL} className="bg-cover  rounded-lg" />

      <div>
        <h2 className="underline font-extrabold text-red-500">{entry.name}</h2>
        <div>
          <p>
            Episode: {entry.currentEpisode ?? 0} / {entry.episodes}
          </p>
          <p>Is Completed: {entry.isCompleted}</p>
          <p>Is Watching: {entry.isWatching}</p>
        </div>
      </div>
    </div>
  );
}
