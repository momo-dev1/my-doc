import { useEffect } from "react";

const SideBar = ({ result, title }) => {
  function scrollToTargetAdjusted() {
    const links = document.querySelectorAll(".link");
    links.forEach((link) => {
      link.addEventListener("click", () => {
        let element = document.getElementById(link.getAttribute("data-link"));
        let offsetPosition = element.offsetTop - 70;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      });
    });
  }
  useEffect(() => {
    const links = document.querySelectorAll(".link");
    function activeOnScroll() {
      let fromTop = window.scrollY + 70;
      links.forEach((link) => {
        let section = document.getElementById(link.getAttribute("data-link"));

        if (
          section?.offsetTop <= fromTop + 70 &&
          section?.offsetTop + section.offsetHeight > fromTop + 70
        ) {
          link.classList.add("text-sky-500");
        } else {
          link.classList.remove("text-sky-500");
        }
      });
    }
    window.addEventListener("scroll", activeOnScroll);

    return () => {
      window.removeEventListener("scroll", activeOnScroll);
    };
  }, []);
  return (
    <>
      <aside className="fixed bg-gray-900 z-40 inset-0 top-[70px] left-[max(0px,calc(50%-45rem))] right-auto w-[19.5rem] pb-10 px-8 overflow-y-auto border-gray-50/[0.06] border-r py-5">
        <ul>
          <h2 className="mb-2 font-semibold text-left text-gray-200 cursor-pointer">
            {title}
          </h2>
          {result.map(({ attributes, id }) => (
            <li
              key={id}
              className="flex items-center gap-2 pl-4 cursor-pointer"
            >
              <span className="pb-1 text-lg">L</span>
              <a
                onClick={scrollToTargetAdjusted}
                data-link={`${attributes.title}`}
                className="link"
              >
                {attributes.title}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default SideBar;
