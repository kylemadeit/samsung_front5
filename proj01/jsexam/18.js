const person = {
  name: "carami",
  job: {
    title: "student",
    manager: {
      name: "kang",
    },
  },
};

function printManagerName(person) {
  console.log(person.job.manager.name);
}

function printManagerName(person) {
  console.log(person.job && person.job.manager && person.job.manager.name);
}

//?.
function printManagerName(person) {
  console.log(person?.job?.manager?.name);
}

printManagerName(person);

const person2 = { name: "kim" };

printManagerName(person2);

//?.()
const kang = {
  name: "kang",
  admin() {
    console.log("관리자입니다.");
  },
};

const kim = {
  name: "kim",
};

kang.admin?.();
kim.admin?.();

//?.[]

console.log(kang["name"]);

const hong = null;

console.log(hong?.["name"]);
