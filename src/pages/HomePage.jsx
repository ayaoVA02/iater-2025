import NavBox from "../components/NavBox"
import Banner from "../components/Banner"
import Logo from "../components/Logo"
import LanguageSelector from "../components/LanguageSelector"

const HomePage = () => {
  const aboutMenuItems = [
    { name: "Vision (iATER 소개)", link: "/about#vision" },
    { name: "Mission (설립목적)", link: "/about#mission" },
    { name: "Mission Statement", link: "/about#mission-statement" },
    { name: "조직도 (조직운영)", link: "/about#organization" },
    { name: "함께하는 이들", link: "/people" },
    { name: "주요연혁", link: "/history" },
    { name: "BI (iATER logo)", link: "/about#logo" },
  ]

  const projectMenuItems = [
    { name: "외부 Project", link: "/project#external" },
    { name: "내부 활동", link: "/project#internal" },
    { name: "연구활동", link: "/project#research" },
  ]

  const programMenuItems = [
    { name: "Plan", link: "/program#plan" },
    { name: "iATER 교육과정", link: "/program#curriculum" },
    { name: "기관 연계계획", link: "/program#partnerships" },
    { name: "Mission Statement", link: "/program#mission" },
  ]

  return (
    <div className="bg-white ">
      <div className="container mx-auto px-4 py-6 ">
        <div className="flex justify-between items-center mb-8">
          <Logo />
          <LanguageSelector />
        </div>

        <div className="text-center mb-12">
          <h1 className="text-xl mb-4">iATER는 라오스에 AI & IT 인재를 양성합니다.</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 items-start  md:h-[40vh] lg:h-[35vh]">

          <NavBox
            title="iATER 소개"
            color="blue"
            link="/about"
            subtitle="iATER을 소개합니다"
            menuItems={aboutMenuItems}
          />
          <NavBox
            title="PROJECT"
            color="orange"
            link="/project"
            subtitle="iATER는 연구를 합니다"
            menuItems={projectMenuItems}
          />
          <NavBox
            title="PROGRAM"
            color="green"
            link="/program"
            subtitle="iATER는 배움이 있습니다"
            menuItems={programMenuItems}
          />
        </div>

      </div>
      <Banner />
    </div>
  )
}

export default HomePage
