// ques1

let emails = [
    { subject:"Meeting Reminder for Project", sender:"boss@example.com", body: "Don't forget our meeting at 10am tomorrow." },
    { subject: "Discount Offer", sender: "promo@example.com",body: "Get 20% off on your next purchase." },
    { subject: "Family Reunion", sender: "mom@example.com", body: "Looking forward to seeing you this weekend." },
    { subject: "Project Update", sender:"colleague@example.com", body: "Here's the latest update on the project." },
    { subject: "Party Invitation", sender: "friend@example.com", body: "Join us for a party this Saturday!" }
];

let filterEmail=(emails,sub) =>{
   return out = emails.filter((val)=>{
       return val.subject.includes(sub)
    })
}
console.log(filterEmail(emails,"Project"));