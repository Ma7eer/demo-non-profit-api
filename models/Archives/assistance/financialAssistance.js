const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const financialAssistanceSchema = new Schema({
  id: { type: Schema.Types.ObjectId },
  familyId: { type: String, default: '' },
  assistanceId: { type: String, default: '' },
  assistanceCategory: { type: String, default: '' },
  amount: { type: String, default: '' },
  startDate: { type: String, default: '' },
  endDate: { type: String, default: '' },
  nameOfRecipient: { type: String, default: '' },
  civilIdOfRecipient: { type: String, default: '' },
  phoneOfRecipient: { type: String, default: '' },
  reasonForSupportStopping: { type: String, default: '' },
  orderedBy: { type: String, default: '' },
}, {timestamps: { createdAt: 'created_at', updatedAt: 'updated_at'}});

module.exports = mongoose.model('FinancialAssistance', financialAssistanceSchema);