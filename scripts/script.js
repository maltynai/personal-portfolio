function selectButton(index) {
    const buttons = document.querySelectorAll('.navbar a');
    buttons.forEach(button => button.classList.remove('selected'));

  
    buttons[index].classList.add('selected');

    const contentSections = document.querySelectorAll('.content section');
    contentSections.forEach(section => section.style.display = 'none');
    contentSections[index].style.display = 'block';
  }

  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth'
    });
  }

  function submitForm() {
    alert('Form submitted!');
  }