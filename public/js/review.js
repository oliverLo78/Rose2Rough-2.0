// Declare review button element 
const createReviewBtn = document.getElementById('createReviewSave');
const deleteBtn = document.getElementsByClassName('deleteBtn');
const editBtn = document.getElementsByClassName('editBtn'); 
const reviewLink = document.getElementsByClassName('review-link'); 

// function to create deck
async function createReviewHandler() {
  let answer = document.getElementById('createReviewName').value;

  const results = await fetch('api/review', {
    method: 'POST',
    body: JSON.stringify({ deck_name: answer }),
    headers: { 'Content-Type': 'application/json' },
  })
  if (results.ok) {
    document.location.replace('/reviews');
  }
  else {
    console.error(new Error());
  }
}

// function to edit review contents - this will re-route to reviewlist
async function editReviewHandler() {
  const edit = await fetch(`/reviewlist/${this.dataset.editReviewId}`);

  console.log(this.dataset.editReviewId);
  // we can see in dev tools that the proper id of the review is being passed in
  console.log(edit);

  if (edit.ok) {
    document.location.replace(`/reviewlist/${this.dataset.editReviewId}`);
  }
  else {
    console.error(new Error());
  }
}

// function to delete specific review
async function deleteReviewHandler() {
  if (confirm('Are you sure you want to delete this review? This cannot be undone.')) {
    const del = await fetch(`api/review`, {
      method: 'DELETE',
      body: JSON.stringify({ id: this.dataset.reviewId }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (del.ok) {
      document.location.replace('/reviews');
    }
    else {
      console.error(new Error());
    }
  } else {
  return;
  };
}

// event listners
createReviewBtn.addEventListener('click', createReviewHandler);

for (let i = 0; i < deleteBtn.length; i++) {
  deleteBtn[i].addEventListener('click', deleteReviewHandler);
}

for (let i = 0; i < editBtn.length; i++) {
  editBtn[i].addEventListener('click', editReviewHandler);
}

for (let i = 0; i < reviewLink.length; i++) {
  reviewLink[i].addEventListener('click', editReviewHandler);
}

