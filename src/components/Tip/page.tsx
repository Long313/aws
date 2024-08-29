interface TIP {
  nameType: string;
  content: string;
  colorFirst: string;
  colorSecond: string;
}

function Tip({ nameType, content, colorFirst, colorSecond }: TIP) {
  console.log(colorFirst, colorSecond);
  console.log("content:", content);
  return (
    <div className="my-[10px]">
      {nameType && content && colorFirst && colorSecond && (
        <div className="rounded-[4px] overflow-hidden max-w-[98%] my-[10px] mx-auto mb-[20px]">
          <div
            style={{ backgroundColor: colorFirst }}
            className="flex items-center justify-start p-[10px]"
          >
            <span
              style={{ color: colorFirst }}
              className="text-[16px] p-[4px] flex justify-center items-center bg-white w-[20px] h-[20px] rounded-full border border-[white]"
            >
              &#33;
            </span>
            <span className="text-white inline-block ml-[10px] font-bold text-[18px]">
              {nameType}
            </span>
          </div>
          <p style={{ backgroundColor: colorSecond }} className="p-[10px]">
            {content}
          </p>
        </div>
      )}
    </div>
  );
}

export default Tip;
