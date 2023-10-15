function submitForm() {
    // Get form data
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dob = document.getElementById('dob').value;
    const country = document.getElementById('country').value;
    const genderElements = document.getElementsByName('gender');
    const selectedGenders = [];
    for (let i = 0; i < genderElements.length; i++) {
      if (genderElements[i].checked) {
        selectedGenders.push(genderElements[i].value);
      }
    }
    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
  
    // Validate form data (you can add more validation as needed)
    if (
      firstName &&
      lastName &&
      dob &&
      country &&
      selectedGenders.length > 0 &&
      profession &&
      email &&
      mobile
    ) {
      // Display survey results in a popup
      const popup = document.getElementById('popup');
      const popupResults = document.getElementById('popup-results');
      popup.style.display = 'block';
      popupResults.innerHTML = `
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Gender:</strong> ${selectedGenders.join(', ')}</p>
        <p><strong>Profession:</strong> ${profession}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile Number:</strong> ${mobile}</p>
      `;
    }
  }
  
  function resetForm() {
    document.getElementById('surveyForm').reset();
  }
  
  function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
  }
  
  // Close popup when clicking outside the content
  window.onclick = function (event) {
    const popup = document.getElementById('popup');
    if (event.target === popup) {
      popup.style.display = 'none';
    }
  };
  