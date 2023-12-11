document.addEventListener('DOMContentLoaded', function ()
{
  const discoverArrow = document.getElementById('discoverArrow');

  if (discoverArrow)
  {
    discoverArrow.addEventListener('click', function ()
    {
      const aboutSection = document.querySelector('#about');

      if (aboutSection)
      {
        aboutSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  }
});
