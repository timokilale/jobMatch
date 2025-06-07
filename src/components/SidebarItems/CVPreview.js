import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCvData } from '../../redux/slices/cvSlice';
import DownloadButton from './Downloadbutton';
import { updateApplicationStatus } from '../../redux/slices/applications';

const CVPreview = ({ applicantId, applicationId, isEmployerView = false, onDecisionMade }) => {
  const dispatch = useDispatch();
  const { cv, loading, error } = useSelector(state => state.cv);
  const { role, user } = useSelector((state) => state.auth);

  useEffect(() => {
    console.log("Token from localStorage:", localStorage.getItem('token'));
    console.log("Auth state:", { role, user });
    if (applicantId) dispatch(fetchCvData(applicantId));
  }, [dispatch, applicantId]);

  const safeRender = (value) => {
    return value;
  };

  const safeRenderError = (error) => {
    return error;
  };

  const formatDateRange = (start, end) => {
    if (!start || !end) return '';
    const startDate = new Date(start);
    const endDate = end ? new Date(end) : null;

    const yearDiff = endDate
      ? endDate.getFullYear() - startDate.getFullYear()
      : 1;
    const monthDiff = endDate
      ? endDate.getMonth() - startDate.getMonth() + yearDiff * 12
      : 12;

    const options = { year: 'numeric', month: 'short' };

    const endText = endDate
      ? (monthDiff >= 12 
          ? `${endDate.getFullYear()}`
          : `${endDate.toLocaleDateString('en-US', options)}`)
      : 'Present';    

    return monthDiff >= 12 
      ? `${startDate.getFullYear()} - ${endText}`
      : `${startDate.toLocaleDateString('en-US', options)} - ${endText}`;
  };

  const handleDecision = (decision) => {
    const appId = applicationId;
    if (!appId) {
      console.error('Missing application ID for decision. ApplicationId prop:', applicationId, 'CV applicationId:', cv?.applicationId);
      return;
    }

    console.log('Making decision:', decision, 'for application:', appId);
    dispatch(updateApplicationStatus({ 
      applicationId: appId, 
      status: decision
    }));
    if (onDecisionMade) {
      onDecisionMade();  // Close modal after decision
    }
    console.log('Dispatching with:', { applicationId: appId, decision });
  };

  if (loading) return <p className="text-center mt-10 text-gray-500">Loading CV...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">Error: {safeRenderError(error)}</p>;
  if (!cv) return <p className="text-center mt-10 text-gray-500">No CV data found.</p>;

  return (
    <>
    <div className={`bg-gray-50 rounded-xl shadow-md p-8 mt-18 max-w-5xl mx-auto ${isEmployerView ? 'mt-0' : ''}`}>
      <div className="flex flex-col md:flex-row items-start justify-between md:items-center border-b pb-4 mb-6">
        <div>
          <h2 className="text-3xl font-bold text-green-800">{safeRender(cv?.fullName)}</h2>
          <p className="text-gray-600 text-sm mt-1">
            {safeRender(cv?.user?.email)} | NIDA: {safeRender(cv?.nida)}
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="space-y-6">
          <section>
            <h3 className="flex items-center text-lg font-semibold text-green-600 mb-2">
              <i className="fas fa-laptop-code mr-2"></i> Computer Skills
            </h3>
            {cv?.generalSkills?.length ? (
              <ul className="list-disc list-inside text-sm text-gray-700">
                {cv.generalSkills.map((s, idx) => (
                  <li key={s?.id}>{safeRender(s?.skill)} - <span className="text-gray-500">{safeRender(s?.proficiency)}</span></li>
                ))}
              </ul>
            ) : <p className="text-gray-500 text-sm">No computer skills found</p>}
          </section>

          <section>
            <h3 className="flex items-center text-lg font-semibold text-green-600 mb-2">
              <i className="fas fa-language mr-2"></i> Languages
            </h3>
            {cv?.languages?.length ? (
              <ul className="text-sm text-gray-700 space-y-1">
                {cv.languages.map((l, idx) => (
                  <li key={l?.id}>
                    {safeRender(l?.language)} -
                    <span className="text-gray-500 ml-1">Speak: {safeRender(l?.speakLevel)}, Read: {safeRender(l?.readLevel)}, Write: {safeRender(l?.writeLevel)}</span>
                  </li>
                ))}
              </ul>
            ) : <p className="text-gray-500 text-sm">No languages found</p>}
          </section>
        </div>

        <div className="md:col-span-2 space-y-6">
          <section>
            <h3 className="flex items-center text-lg font-semibold text-green-600 mb-2">
              <i className="fas fa-graduation-cap mr-2"></i> Academic Qualifications
            </h3>
            {cv?.qualifications?.length ? (
              <div className="space-y-2 text-sm text-gray-700">
                {cv.qualifications.map((q, idx) => (
                  <div key={q?.id} className="border-l-4 pl-3 border-green-300">
                  <p><strong>{safeRender(q?.level)}</strong> in {safeRender(q?.fieldOfStudy)}</p>
                  <p className="text-gray-500">{safeRender(q?.institution)}</p>
                  {q.startDate && q.endDate && (
                    <p className="text-xs text-gray-400 italic">
                      {formatDateRange(q.startDate, q.endDate)}
                    </p>
                  )}
                </div>
              ))}

              </div>
            ) : <p className="text-gray-500 text-sm">No qualifications found</p>}
          </section>

          <section>
            <h3 className="flex items-center text-lg font-semibold text-green-600 mb-2">
              <i className="fas fa-briefcase mr-2"></i> Work Experience
            </h3>
            {cv?.experiences?.length ? (
              <div className="space-y-4 text-sm text-gray-700">
                {cv.experiences.map((e, idx) => (
                  <div key={e?.id} className="p-3 bg-white rounded shadow-sm border">
                    <p className="font-medium">{safeRender(e?.jobTitle)} at {safeRender(e?.companyName)}</p>
                    {e.startDate && e.endDate && (
                      <p className="text-xs text-gray-400 italic">
                        {formatDateRange(e.startDate, e.endDate)}
                      </p>
                    )}
                    <p className="text-gray-500 text-xs mt-1">{safeRender(e?.responsibilities)}</p>
                  </div>
               ))}
              </div>
            ) : <p className="text-gray-500 text-sm">No work experience found</p>}
          </section>
        </div>
      </div>
    </div>
    {!isEmployerView && (
      <div className="mb-4 md:mt-4">
        <DownloadButton applicantId={cv?.id} />
      </div>
    )}
    {isEmployerView && cv && (
       <div className="flex justify-center gap-4 mt-6 p-4 bg-white border-t">
         <button
           onClick={() => handleDecision('reject')}
           className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
         >
           Reject 
         </button>
         <button
           onClick={() => handleDecision('accept')}
           className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
         >
           Accept
         </button>
        </div>
      )}
    </>  
  );
};

export default CVPreview;