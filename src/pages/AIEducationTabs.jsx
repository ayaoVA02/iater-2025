import { useState, useEffect } from 'react';
import { BiBrain } from 'react-icons/bi';
import { CgPullClear } from 'react-icons/cg';
import useDeviceType from '../hook/useDeviceType';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import DOMPurify from 'dompurify';
import { isMobile } from 'react-device-detect';

const AIResearchTabs = () => {
  const { t, i18n } = useTranslation();
  
  const TABS = {
    EDUCATION: 0,
    RESEARCH: 1,
    CREATIVE: 2
  };
  
  const [searchParam] = useSearchParams();
  const initialTab = parseInt(searchParam.get('tab')) || TABS.EDUCATION;
  const [activeTab, setActiveTab] = useState(initialTab);
  const [loading, setLoading] = useState(false);

  const fontClass = {
    en: "font-en",
    la: "font-lao",
    ko: "font-kr",
  }[i18n.language];

  // Get content dynamically from translations
  const getTabContent = (tabKey) => {
    const contentMap = {
      [TABS.EDUCATION]: 'education',
      [TABS.RESEARCH]: 'research',
      [TABS.CREATIVE]: 'creative'
    };
    
    const key = contentMap[tabKey];
    return {
      icon: tabKey === TABS.EDUCATION ? <img src='/webimage/cores1.png' className="w-24 h-24" /> :
            tabKey === TABS.RESEARCH ? <CgPullClear className="w-12 h-12" /> :
            <BiBrain className="w-12 h-12" />,
      title: t(`about.coreValues.content.${key}.title`),
      subtitle: t(`about.coreValues.content.${key}.subtitle`),
      content: [{
        heading: t(`about.coreValues.content.${key}.content.heading`),
        items: t(`about.coreValues.content.${key}.content.items`, { returnObjects: true }),
        des: t(`about.coreValues.content.${key}.content.des`)
      }]
    };
  };

  // Icons for navigation
  const navIcons = [
    { id: TABS.EDUCATION, icon: <img src='/webimage/cores1.png' className={` ${activeTab === TABS.EDUCATION ?  isMobile ? 'w-18 h-18': 'w-32 h-32' : isMobile ? 'w-8 h-8' : 'w-10 h-10'} `} /> },
    { id: TABS.RESEARCH, icon: <img src='/webimage/cores2.png' className={` ${activeTab === TABS.RESEARCH ? isMobile ? 'w-18 h-18': 'w-32 h-32' : isMobile ? 'w-8 h-8' : 'w-10 h-10'} `} /> },
    { id: TABS.CREATIVE, icon: <img src='/webimage/cores3.png' className={` ${activeTab === TABS.CREATIVE ? isMobile ? 'w-18 h-18': 'w-32 h-32' : isMobile ? 'w-8 h-8' : 'w-10 h-10'} `} /> }
  ];

  const deviceType = useDeviceType();
  const getContentWidth = () => {
    if (deviceType === 'desktop') return 'desktopWidth';
    if (deviceType === 'tablet') return 'templetWidth';
    return 'mobileWidth';
  };

  // Get current content based on active tab
  const content = getTabContent(activeTab);

  return (
    <div className={`${getContentWidth()} ${fontClass} mx-auto rounded-lg mt-[1rem] mb-[4rem] px-6`}>
      <h1 className={` ${isMobile ? "text-2xl": "text-4xl"} font-bold mb-12 text-[#105691] `}>{t("home.aboutMenuItems3")}</h1>

      <div className="flex flex-col md:flex-row">
        {/* Sidebar navigation */}
        <div className={`p-4 flex md:flex-col justify-center md:justify-start items-center space-y-0 md:space-y-6 space-x-4 md:space-x-0 border-b`}>
          {navIcons.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`p-3 rounded-lg transition-all duration-300 ${
                activeTab === item.id
                  ? 'bg-blue-100'
                  : 'border border-gray-300 hover:bg-gray-100'
              }`}
              aria-label={`Tab ${item.id}`}
            >
              {item.icon}
            </button>
          ))}
        </div>

        {/* Content area */}
        <div className="flex-1">
          {loading ? (
            <div className="flex items-center justify-center h-full">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            </div>
          ) : content ? (
            <div className={`space-y-6 px-4`}>
              <div className="space-y-6 bg-blue-50 rounded-lg p-4 w-full max-w-[900px]">
                {content.content.map((section, idx) => (
                  <div key={idx} className="space-y-4">
                    <p className="text-gray-800 mb-12 text-justify leading-relaxed" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(section.heading) }} />

                    <ul className="space-y-3 pl-5 list-disc text-justify leading-relaxed">
                      {Array.isArray(section.items) ? (
                        section.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="space-y-1 text-gray-700">
                            <span className="font-semibold text-gray-800">{item.title}:</span> {item.description}
                          </li>
                        ))
                      ) : (
                        // Handle if items is an object (like in research section)
                        Object.values(section.items).map((item, itemIdx) => (
                          <li key={itemIdx} className="space-y-1 text-gray-700">
                            <span className="font-semibold text-gray-800">{item.title}:</span> {item.description}
                          </li>
                        ))
                      )}
                    </ul>

                    <p className='text-gray-800 mt-12 text-justify leading-relaxed' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(section.des) }} />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-500">No content available</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIResearchTabs;