type language = {
    name: string;
    path: string;
    bg?: string;
    bg_hover?: string;
    text?: string;
    text_hover?: string;
  };
  
  const listLang: language[] = [
    {
      name: "Go",
      path: "go.svg",
      bg: "bg-sky-800",
      bg_hover: "bg-blue-300",
      text: "text-white",
      text_hover: "text-black"
    },
    {
      name: "TypeScript",
      path: "ts.svg",
    },
    {
      name: "Python",
      path: "python.svg",
    },
    {
      name: "JavaScript",
      path: "js.svg",
    },
    {
      name: "PHP",
      path: "php.svg",
    },
    {
      name: "Kotlin",
      path: "kotlin.svg",
    },
    {
      name: "Java",
      path: "java.svg",
    },
    {
      name: "Dart",
      path: "dart.svg",
    },
    {
      name: "C",
      path: "c.svg",
    },
    {
      name: "C++",
      path: "cpp.svg",
    },
    {
      name: "C#",
      path: "csharp.svg",
    },
  ];
  
  export default listLang;