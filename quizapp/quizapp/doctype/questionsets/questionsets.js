frappe.ui.form.on("Questionsets", "passing_marks", function(frm) {
  console.log(cur_frm.doc.passing_marks);
  console.log(parseInt(cur_frm.doc.marks_per_question));

  if (parseInt(cur_frm.doc.passing_marks) < parseInt(cur_frm.doc.marks_per_question))
  {
  frm.set_value("passing_marks","")
    msgprint(__("Passing marks can't be less than marks per correct answer"));


  }

});
