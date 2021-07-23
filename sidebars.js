/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
   
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
  */
 
  library: [
    'intro',
    {
      type: 'category',
      label: 'KPIs',
      collapsed: false,
      items: [
        'savings-rate',
        'runway',
        'net-worth',
      ],
    },
    'work-til-youre-65',  
    {
      type: 'category',
      label: 'Spending',
      collapsed: false,
      items: [
        'housing',
        'transportation',
        'food',
        'others'
      ],
    },
    {
      type: 'category',
      label: 'Investing',
      collapsed: false,
      items: [
        'stocks-bonds',
        'real-estate',
        'entrepreneurship',
        'human-capital'
      ],
    },
  ]
};
