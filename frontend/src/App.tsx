import { useState, useEffect } from "react";
import { GreetService } from "../bindings/changeme";
import { Events, Window, WML } from "@wailsio/runtime";
import EntryCard from "@components/EntryCard";
import { IEntry } from "./interfaces";

const mockData: IEntry[] = [
  {
    name: "Solo Leveling",
    episodes: 20,
    currentEpisode: 5,
    isCompleted: false,
    isWatching: true,
    imageURL:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx176496-xCNtU4llsUpu.png",
  },
  {
    name: "One Piece",
    episodes: 30,
    currentEpisode: 10,
    isCompleted: true,
    isWatching: false,
    imageURL:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21-YCDoj1EkAxFn.jpg",
  },
];

function App() {
  const [time, setTime] = useState("Listening for Time event...");
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // const doGreet = () => {
  //   let localName = name;
  //   if (!localName) {
  //     localName = 'anonymous';
  //   }
  //   GreetService.Greet(localName).then((resultValue) => {
  //     setResult(resultValue);
  //   }).catch((err) => {
  //     console.log(err);
  //   });
  // }

  async function getPosition() {
    Window.Position()
      .then((position) => {
        setPosition({ x: position.x, y: position.y });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    Events.On("time", (timeValue) => {
      setTime(timeValue.data);
      getPosition();
    });

    // Reload WML so it picks up the wml tags
    WML.Reload();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="text-xl">
          <p>{time}</p>
        </div>
        <div>
          X: {position.x} Y: {position.y}
        </div>
        <a onClick={Window.Close}>Close</a>
      </div>

      <div className="width-full space-y-3 mx-5">
        <EntryCard entry={mockData[0]} />
        <EntryCard entry={mockData[1]} />

        <EntryCard entry={mockData[0]} />
        <EntryCard entry={mockData[1]} />

        <EntryCard entry={mockData[0]} />
        <EntryCard entry={mockData[1]} />

        <EntryCard entry={mockData[0]} />
        <EntryCard entry={mockData[1]} />

        <EntryCard entry={mockData[0]} />
        <EntryCard entry={mockData[1]} />
      </div>
    </>
  );
}

export default App;
