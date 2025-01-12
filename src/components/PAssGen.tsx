import { ChangeEvent, useEffect, useRef, useState } from "react";

const PAssGen = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);

  const passRef = useRef<HTMLInputElement | null>(null)

  const generatePassword = () => {
    let pass = "";
    let passValue = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (number) passValue += "1234567890";
    if (character) passValue += "$@#&*";
    for (let index = 0; index < length; index++) {
      const char = Math.floor(Math.random() * passValue.length + 1);
      pass += passValue.charAt(char);
    }
    setPassword(pass);
  };

  const copyPass = ()=>{
    window.navigator.clipboard.writeText(password)
    if(passRef.current){
        passRef.current.select()
    }
  }

  useEffect(() => {
    generatePassword();
  }, [length, number, character]);
  return (
    <div className="flex items-center justify-center bg-slate-600 h-full py-6">
      <div className="w-full px-4">
        <h1 className="text-center text-xl mb-2 text-yellow-50">
          Password Generator
        </h1>
        <div className="w-full flex">
          <input
            className="px-4 py-1 w-full border-none outline-none rounded-l "
            type="text"
            name=""
            id=""
            value={password}
            ref={passRef}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />
          <button onClick={copyPass} className="px-2 py-1 rounded-r bg-teal-600 text-white font-semibold">
            Copy
          </button>
        </div>
        <div className="mt-4 flex items-center justify-around">
          <div className="flex items-center gap-2">
            <input
              className="cursor-pointer"
              type="range"
              name=""
              id="length"
              min={8}
              max={20}
              value={length}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setLength(Number(e.target.value))
              }
            />
            <label className="text-xs" htmlFor="length">
              Length
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              className="cursor-pointer"
              type="checkbox"
              name=""
              id="number"
              onChange={() => setNumber((prev) => !prev)}
            />
            <label className="text-xs" htmlFor="number">
              Numbers
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              className="cursor-pointer"
              type="checkbox"
              name=""
              id="character"
              onChange={() => setCharacter((prev) => !prev)}
            />
            <label className="text-xs" htmlFor="character">
              Characters
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PAssGen;
