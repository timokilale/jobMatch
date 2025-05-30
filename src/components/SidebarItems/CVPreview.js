import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCvData } from '../../redux/slices/cvSlice';
import DownloadButton from './Downloadbutton';

const CVPreview = ({ applicantId }) => {
  const dispatch = useDispatch();
  const { cv, loading, error } = useSelector(state => state.cv);

  useEffect(() => {
    if (applicantId) dispatch(fetchCvData(applicantId));
  }, [dispatch, applicantId]);

  const safeRender = (value) => {
    if (value === null || value === undefined) return 'N/A';
    if (typeof value === 'object') return Object.keys(value).length ? JSON.stringify(value) : 'N/A';
    return String(value);
  };

  const safeRenderError = (error) => {
    if (!error) return '';
    if (typeof error === 'string') return error;
    if (typeof error === 'object') return error.message || error.error || JSON.stringify(error);
    return String(error);
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



  if (loading) return <p className="text-center mt-10 text-gray-500">Loading CV...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">Error: {safeRenderError(error)}</p>;
  if (!cv) return <p className="text-center mt-10 text-gray-500">No CV data found.</p>;

  return (
    <>
    <div className="bg-gray-50 rounded-xl shadow-md p-8 mt-18 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row items-start justify-between md:items-center border-b pb-4 mb-6">
        <div>
          <h2 className="text-3xl font-bold text-green-800">{safeRender(cv?.fullName)}</h2>
          <p className="text-gray-600 text-sm mt-1">
            {safeRender(cv?.user?.email || cv?.email)} | NIDA: {safeRender(cv?.nida)}
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="space-y-6">
          <section>
            <h3 className="flex items-center text-lg font-semibold text-green-600 mb-2">
              <i className="fas fa-laptop-code mr-2"></i> Computer Skills
            </h3>
            {cv?.skills?.length ? (
              <ul className="list-disc list-inside text-sm text-gray-700">
                {cv.skills.map((s, idx) => (
                  <li key={s?.id || idx}>{safeRender(s?.skill)} - <span className="text-gray-500">{safeRender(s?.proficiency)}</span></li>
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
                  <li key={l?.id || idx}>
                    {safeRender(l?.language)} - 
                    <span className="text-gray-500 ml-1">Speak: {safeRender(l?.speak)}, Read: {safeRender(l?.read)}, Write: {safeRender(l?.write)}</span>
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
                  <div key={q?.id || idx} className="border-l-4 pl-3 border-green-300">
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
                  <div key={e?.id || idx} className="p-3 bg-white rounded shadow-sm border">
                    <p className="font-medium">{safeRender(e?.jobTitle)} at {safeRender(e?.institution)}</p>
                    {e.startDate && e.endDate && (
                      <p className="text-xs text-gray-400 italic">
                        {formatDateRange(e.startDate, e.endDate)}
                      </p>
                    )}
                    <p className="text-gray-500 text-xs mt-1">{safeRender(e?.duties)}</p>
                  </div>
               ))}
              </div>
            ) : <p className="text-gray-500 text-sm">No work experience found</p>}
          </section>
        </div>
      </div>
    </div>
    <div className="mb-4 md:mt-4">
      <DownloadButton applicantId={cv?.id || applicantId} />
    </div>
    </>
    
  );
};

export default CVPreview;
