frappe.ui.form.on("Questions", "answer", function(frm) {
  console.log(cur_frm.doc.passing_marks);
  console.log(cur_frm.doc.marks_per_question);

  if (cur_frm.doc.a == cur_frm.doc.b||cur_frm.doc.a == cur_frm.doc.c||cur_frm.doc.a == cur_frm.doc.d||cur_frm.doc.b == cur_frm.doc.c||cur_frm.doc.b == cur_frm.doc.d||cur_frm.doc.c == cur_frm.doc.d)
  {
  //frm.set_value("passing_marks","")
    msgprint(__("No two options can be same "));


  }

});
