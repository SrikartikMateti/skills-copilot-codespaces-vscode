function skillmember()
{
    var members = ["John", "Sarah", "Alice", "David", "Bob"];
    var skills = ["Python", "Java", "C++", "Python", "Java"];
    var memberSkills = {};
    for (var i = 0; i < members.length; i++)
    {
        var member = members[i];
        var skill = skills[i];
        if (memberSkills[member] === undefined)
        {
            memberSkills[member] = [];
        }
        memberSkills[member].push(skill);
    }
    for (var member in memberSkills)
    {
        console.log(member + ": " + memberSkills[member].join(", "));
    }
}