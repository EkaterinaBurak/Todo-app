export function createModal() {
  return `<div class="modal-dialog" role="document">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title">New todo</h5>
      <input type="text" class="form-control todo-title" id="recipient-name">
    </div>
    <div class="modal-body">
      <p>Todo description</p>
      <textarea class="form-control todo-description" id="message-text"></textarea>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-primary">Save changes</button>
      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
    </div>
  </div>
</div>`
}
