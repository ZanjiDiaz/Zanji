import React from "react";

const Content = () => {
  const features = [
    {
      name: "Starbucks",
      image1: "",
      image2: "",
      image3: "",
      image4: "",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in imperdiet mauris, id sollicitudin erat. ",

      capab: [
        {
          capabID: 1,
          capabName: "Responsive",
          capabDesc: "Can use across all devices",
          capabIcon: "1",
        },
        {
          capabID: 1,
          capabName: "UI/UX",
          capabDesc: "Fantastic UI",
          capabIcon: "1",
        },
        {
          capabID: 1,
          capabName: "Security",
          capabDesc: "Enhanced Security",
          capabIcon: "1",
        },
      ],
    },
    {
      name: "Uber",
      image1: "",
      image2: "",
      image3: "",
      image4: "",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in imperdiet mauris, id sollicitudin erat. ",

      capab: [
        {
          capabID: 1,
          capabName: "Responsive",
          capabDesc: "Can use across all devices",
          capabIcon: "1",
        },
        {
          capabID: 1,
          capabName: "UI/UX",
          capabDesc: "Fantastic UI",
          capabIcon: "1",
        },
        {
          capabID: 1,
          capabName: "Security",
          capabDesc: "Enhanced Security",
          capabIcon: "1",
        },
      ],
    },
    {
      name: "Yummly",
      image1: "",
      image2: "",
      image3: "",
      image4: "",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in imperdiet mauris, id sollicitudin erat. ",

      capab: [
        {
          capabID: 1,
          capabName: "Responsive",
          capabDesc: "Can use across all devices",
          capabIcon: "1",
        },
        {
          capabID: 1,
          capabName: "UI/UX",
          capabDesc: "Fantastic UI",
          capabIcon: "1",
        },
        {
          capabID: 1,
          capabName: "Security",
          capabDesc: "Enhanced Security",
          capabIcon: "1",
        },
      ],
    },
  ];
  return (
    <div>
      {features.map((feature) => (
        <div className="bg-white dark:bg-darkBG dark:border-y-[.1rem] dark:border-dark">
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8 ">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-lightBG">
                {feature.name}
              </h2>
              <p className="mt-4 text-gray-500 dark:text-darkLight">
                {feature.description}
              </p>

              <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                {features[0].capab.map((capabs) => (
                  <div
                    key={feature.name}
                    className="border-t border-gray-200 pt-4 dark:border-darkLight"
                  >
                    <dt className="font-medium text-gray-900 dark:text-darkLight">
                      {capabs.capabName}
                    </dt>
                    <dd className="mt-2 text-sm text-gray-500 dark:text-darkLight/80">
                      {capabs.capabDesc}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
              <img
                src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
                alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                className="rounded-lg bg-gray-100"
              />
              <img
                src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
                alt="Top down view of walnut card tray with embedded magnets and card groove."
                className="rounded-lg bg-gray-100"
              />
              <img
                src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
                alt="Side of walnut card tray with card groove and recessed card area."
                className="rounded-lg bg-gray-100"
              />
              <img
                src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
                alt="Walnut card tray filled with cards and card angled in dedicated groove."
                className="rounded-lg bg-gray-100"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Content;
