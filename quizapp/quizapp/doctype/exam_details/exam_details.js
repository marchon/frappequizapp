frappe.ui.form.on("Exam Details", "end_time", function(frm) {
  console.log(cur_frm.doc.passing_marks);
  console.log(cur_frm.doc.marks_per_question);

  if (cur_frm.doc.end_time < cur_frm.doc.start_time)
  {
  frm.set_value("end_time","")
    msgprint(__("End time can't be less than Start Time"));
  }

});
